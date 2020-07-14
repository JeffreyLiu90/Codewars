const longest = (str1, str2) => {
  const combinedString = str1
    .concat(str2)
    .split("")
    .sort();

  const result = [...new Set(combinedString)];
  return result.join("");
};

//const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
