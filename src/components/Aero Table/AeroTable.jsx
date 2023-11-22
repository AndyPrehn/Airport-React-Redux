import { useSelector } from 'react-redux';

export default function AeroTable() {
    const airlines = useSelector(store => store.airlines);

    return (
        <div id="airline-table" >
            <h3>Airplanes in the Airport</h3>

            <table>
                <thead>
                    <tr>
                        <th>Airlines</th>
                    </tr>
                </thead>
                <tbody>
                    {airlines.map((plane) => 
                    <tr key={plane.airplaneNumber}>
                        <td>{plane.airplaneName}</td>
                        <td>{plane.airplaneNumber}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}