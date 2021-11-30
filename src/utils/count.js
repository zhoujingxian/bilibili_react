const Count=(num)=>{
    return num>9999 ? (num/10000).toFixed(1)+'万':num+'';
}
export default  Count