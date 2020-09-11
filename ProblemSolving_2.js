function merge2String(s1,s2){
    let i=0, j=0, result="";
    while(i<s1.length&&j<s2.length){
        result+=s1.charAt(i++);
        result+=s2.charAt(j++);
    }
    while(i<s1.length) result+=s1.charAt(i++);
    while(j<s2.length) result+=s2.charAt(j++);
    return result;
}

console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));