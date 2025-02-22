const FileFormat = (url = "") => {
  const fileExt = url.split(".").pop();

  if (fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg")
    return "video";

  if (fileExt === "mp3" || fileExt === "wav") return "audio";
  if (
    fileExt === "png" ||
    fileExt === "gif" ||
    fileExt === "jpg" ||
    fileExt === "jpeg"
  )
    return "image";

  return "file";
};

export default FileFormat;
