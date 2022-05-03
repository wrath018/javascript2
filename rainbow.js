function changeColor(e) {
    let ele = document.getElementById('main');
    main.classList.remove('summer');
    main.classList.remove('winter');
    main.classList.remove('spring');
    switch(event.target.value) {
        case '1':
            main.classList.add('summer');
            break;
        case '2':
            main.classList.add('winter');
            break;
        case '3':
            main.classList.add('spring');
            break;
        default:
            break;
    }
}