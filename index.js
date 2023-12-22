// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '425px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "인멀희가비의 시작" },
  { "number": 2, "message": "서힝 하우스 크리스마스" },
  { "number": 3, "message": "드디어 졸업을 하는구나" },
  { "number": 4, "message": "율전 잘~ 놀다갑니다" },
  { "number": 5, "message": "성대가 졸업가운은 참 예뻐" },
  { "number": 6, "message": "엄기윤 표정ㅋㅋㅋㅋ 뒤에 이승훈(?)" },
  { "number": 7, "message": "앗 사진이 잘렸네" },
  { "number": 8, "message": "어우 사진에서 술냄새나" },
  { "number": 9, "message": "동탄에서 승훈기윤 생일추카포카" },
  { "number": 10, "message": "?이게 무슨 상황이야?ㅋㅋㅋ" },
  { "number": 11, "message": "와~이다솔 생일임" },
  { "number": 12, "message": "이다솔 선정 올해의 사진" },
  { "number": 13, "message": "동해 여행 성공적" },
  { "number": 14, "message": "지원이 고향 방문" },
  { "number": 15, "message": "메에~" },
  { "number": 16, "message": "예쁜 개복치 지연찌 생일" },
  { "number": 17, "message": "또생네컷" },
  { "number": 18, "message": "또또생네컷" },
  { "number": 19, "message": "사랑스러운 지원찌 생일" },
  { "number": 20, "message": "언니 내꺼 목돌아갔어 AS 시급" },
  { "number": 21, "message": "Happy Heewon Day" },
  { "number": 22, "message": "누가 머리를 퍼렇게 칠해놨어" },
  { "number": 23, "message": "" },
  { "number": 24, "message": "" }
];
