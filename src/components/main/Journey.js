export default function Journey(props)
{
    const details = props.journey.details.length > 300 
        ? props.journey.details.substring(0, 300) + "..." 
        : props.journey.details

    return (
        <div className="app-main__journey">
            <img src={props.journey.image} alt="Location" className="app-main__journey__image"/>
            <div className="app-main__journey__body">
                <div className="app-main__journey__body__country">
                    <i class="fas fa-map-marker-alt text-primary"></i>
                    {props.journey.country}
                </div>
                <div className="app-main__journey__body__location">{props.journey.location}</div>
                <div className="app-main__journey__body__date">
                    {props.journey.date.start} - {props.journey.date.end}
                </div>
                <div className="app-main__journey__body__details">{details}</div>
            </div>
        </div>
    )
}