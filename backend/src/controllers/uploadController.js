export const uploadStatement = (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a file",
      });
    }

    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      file: req.file,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};