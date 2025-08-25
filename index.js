document.querySelector('.colorInputJS').addEventListener('input', function(){
    const color =document.querySelector('.colorInputJS');
    const colorResult =color.value;
    const html = `<p>You picked : ${colorResult}</p>`
    
    document.querySelector('.outputColor').style.backgroundColor = `${colorResult}`;
    document.querySelector('.colorResult').innerHTML = html;
})