let searchbutton=document.getElementById("searchbutton");
let cityname=document.getElementById("cityname");
let country=document.getElementById("countryInfo");
let time=document.getElementById("time");
let temperature=document.getElementById("temperature");
let condition=document.getElementById("condition");
let error=document.getElementById("error");
async function getData(city){
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=b7a7e173bfce4fd990a172821240812&q=${city}&aqi=yes`
    );
    const data = await response.json();
    if (data.error) {
        country.style.display="none";
        time.style.display="none";
        temperature.style.display="none";
        condition.style.display="none";
        error.style.display="block";
        error.textContent="Enter a Valid City"
        return ;
    }else{
        return data;
    }
}
searchbutton.addEventListener('click',async ()=>{
    const city=cityname.value;
    const data=await getData(city);
    if(data){
        error.style.display="none";

        country.style.display="block";
        time.style.display="block";
        temperature.style.display="block";
        condition.style.display="block";

        country.textContent=`Country = ${data.location.country}`;
        time.textContent=`Time = ${data.location.localtime}`;
        temperature.textContent=`Temperature = ${data.current.temp_c} C`;
        condition.textContent=`Condition = ${data.current.condition.text}`;
    }
})