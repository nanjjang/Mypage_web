const btn = document.getElementById('btn1')
const text = document.querySelector(".typing")
const letters = ["Full-stack developer", "Korean", "student in SunrinHighschool"];

const speed = 100;

let index=0;


// 타이핑 효과
const typing = async () => {  
  const letter = letters[index].split("");
  
  while (letter.length) {
    await wait(speed);
    text.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(800);
  
  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[index].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    text.innerHTML = letter.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  index = !letters[index + 1] ? 0 : index + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);


const onClick = e => {
  const { x, y, width, height} = btn.getBoundingClientRect()
  const radius = Math.sqrt(width * width + height * height)
  btn.style.setProperty('--diameter', radius * 2 + 'px')
  const { clientX, clientY } = e
  const left = (clientX - x - radius) / width * 100 + '%'
  const top = (clientY - y - radius) / height * 100 + '%'

  btn.style.setProperty('--left', left)
  btn.style.setProperty('--top', top)
  btn.style.setProperty('--a', '')
  setTimeout(() => {
    btn.style.setProperty('--a', 'ripple-effect forwards 600ms cubic-bezier(.68,.42,.9,.58)')
  }, 5)
}

btn.addEventListener('click', onClick)