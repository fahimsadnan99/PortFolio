

export const DarkMoodEnabled=(mood)=>{
    if(mood == "dark"){
        localStorage.setItem('theme', 'light');
    }else if(mood == "lite"){
        localStorage.setItem('theme', 'dark');
    }
}