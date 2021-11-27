// Add zero in front of numbers < 10
export function zeroPad(i: Number): string {
  let result = i + "";
  if (i < 10) {
    result = "0" + i;
  }
  return result;
}
