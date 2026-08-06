import { generateFinancialSummary } from "../services/financialAnalysis.js";
import { askGroq } from "../services/aiService.js";

export const getFinancialSummary = async (req, res) => {
  try {
    console.log("🤖 AI Controller Hit");

    // =====================================
    // Generate Financial Summary
    // =====================================

    const summary = await generateFinancialSummary(req.user.id);

    console.log("========== FINANCIAL SUMMARY ==========");
    console.log(summary);
    console.log("=======================================");

    // =====================================
    // Build Prompt
    // =====================================

    const prompt = `
You are FinAI, an expert AI Financial Advisor.

Analyze the following financial summary.

Financial Data:

${JSON.stringify(summary, null, 2)}

---------------------------------------------------------

Return ONLY ONE valid JSON object.

STRICT RULES:

1. Return ONLY JSON.
2. Do NOT write markdown.
3. Do NOT use \`\`\`json.
4. Do NOT explain anything.
5. Currency values MUST be plain numbers.
6. NEVER use the ₹ symbol.
7. Every property must be valid JSON.
8. monthlyTrends must contain numbers only.

Example:

{
  "month":"2026-07",
  "income":85000,
  "expense":21813,
  "savings":63187
}

Return JSON in exactly this format:

{
  "healthScore": 0,
  "summary": "",
  "strengths": [],
  "needsAttention": [],
  "monthlyTrends": [
    {
      "month": "",
      "income": 0,
      "expense": 0,
      "savings": 0
    }
  ],
  "personalizedSuggestions": [],
  "oneAction": "",
  "estimatedSavings": 0
}
`;

    // =====================================
    // Ask Groq
    // =====================================

    const aiResponse = await askGroq(prompt);

    console.log("========== RAW AI RESPONSE ==========");
    console.log(aiResponse);
    console.log("=====================================");

    // =====================================
    // Remove Markdown
    // =====================================

    const cleanedResponse = aiResponse
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    // =====================================
    // Parse JSON
    // =====================================

    let report;

    try {
      report = JSON.parse(cleanedResponse);
    } catch (err) {
      console.log("❌ JSON Parse Error");
      console.log(cleanedResponse);

      return res.status(500).json({
        success: false,
        message: "AI returned invalid JSON",
        rawResponse: cleanedResponse,
      });
    }

    // =====================================
    // Success
    // =====================================

    return res.status(200).json({
      success: true,
      financialSummary: summary,
      aiReport: report,
    });

  } catch (error) {

    console.log("========== AI CONTROLLER ERROR ==========");
    console.log(error);
    console.log("=========================================");

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};