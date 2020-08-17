export function avatarStyle(firstletter) {
  if (firstletter === "а" || "я" || "о" || "е" || "ч" || "К") {
    return "avatar";
  }

  if (firstletter === "б" || "ю" || "р" || "с" || "у" || "н") {
    return "avatar2";
  }

  if (firstletter === "т" || "з" || "ф" || "ц" || "э" || "в") {
    return "avatar3";
  }

  if (firstletter === "и" || "г" || "ж" || "л" || "д" || "п") {
    return "avatar4";
  }

  return "avatar5";
}
