import data from '../db/user.js';
const userData =data.user;

const user=[];


for(let i=0; i<userData.length; i++){
  user.push(userData[i]);
}




function findMatches(wordToMatch,user) {
    return user.filter((userInfo) => {
      /**
       * ! gi là các cờ :
       * ! g tìm kiếm toàn cục (global), nghĩa là tìm tất cả các trường hợp, không chỉ lần đầu tiên.
       * ! i: không phân biệt chữ hoa chữ thường .
       */
      const regex = new RegExp(wordToMatch, 'gi');
      /**
       * *Kiểm tra userInfo có khớp với kiểu chính quy không
       * *Hàm match trả về một arr chứa các kết quả khớp howacj null
       */
      return userInfo.username.match(regex) || userInfo.phone.match(regex);
      
    })
}
function displayMatches() {
  const matchArray = findMatches(this.value, user); //*Trả về mảng userInfor khớp tìm kiếm
  const html = matchArray.map(match => {
    const regex = new RegExp(this.value, 'gi');
    const userName = match.username.replace(regex, `<span class="highlight">${this.value}</span>`);
    const userPhone = match.phone.replace(regex, `<span class="highlight">${this.value}</span>`);
    return `<li>${userName}</li>
           <li> ${userPhone}</li></br>`;
  }).join('');
  suggestions.innerHTML = html;
 
  if(matchArray.length===0){
    suggestions.innerHTML = '<li>No match found</li>';
  }
  
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches)
searchInput.addEventListener('change', displayMatches)


