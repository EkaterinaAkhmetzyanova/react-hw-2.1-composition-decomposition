/** Виджет для отображения погоды, принимает иконку и непосредственно прогноз погоды */
export default function WeatherWidget({icon, content}) {
    return (
        <div className='Weather'>
            <img className='WeatherIcon' src={icon}  alt=''/>
            <div className='WeatherContent'>{content}</div>
        </div>
    )
}