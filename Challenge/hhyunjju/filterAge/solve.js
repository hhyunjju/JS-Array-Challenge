// write your codes
function solution(inputArray) {
    return inputArray.filter((item)=>{
    return item.age>=30&&item.age<50;
    })
}

exports.solution = solution;
