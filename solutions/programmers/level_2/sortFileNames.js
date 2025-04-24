function solution(files) {
  const trimedFiles = files.map((c) => c.split(/([0-9]+)/g));

  trimedFiles.sort((a, b) => {
    const headComparison = a[0].toUpperCase().localeCompare(b[0].toUpperCase());
    if (headComparison) return headComparison;
    return Number(a[1]) - Number(b[1]);
  });

  return trimedFiles.map((c) => c.join(""));
}
