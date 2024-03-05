const noBtn = document.getElementById('no');
const catImg = document.getElementById('cat');

noBtn.addEventListener('mouseenter', function() {
    const x = Math.random() * (window.innerWidth - this.clientWidth);
    const y = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

noBtn.addEventListener('mouseover', function() {
    catImg.src = 'sad_cat.png'; // 换成你的小猫伤心图片路径
});

noBtn.addEventListener('mouseout', function() {
    catImg.src = 'happy_cat.png'; // 换回你的小猫开心图片路径
});
