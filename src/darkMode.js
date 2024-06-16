if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {      
    document.documentElement.classList.remove('dark');
}

window.onload = () => {
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const checkbox = document.querySelector('#darkMode');

if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {      
    document.documentElement.classList.remove('dark');
    checkbox.checked = true;
}

        checkbox.addEventListener("change", function (event) {
        console.log(event.target.checked);

        if (event.target.checked) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
})

}