const myFilter = (list,word)=>list.filter((item)=>item.url.match(word))

module.exports=myFilter;