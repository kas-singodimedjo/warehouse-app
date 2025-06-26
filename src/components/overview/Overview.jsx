import './Overview.css'
import data from '/src/assets/data.json'
function Overview() {

    const uniqueGebouw = [...new Set(data.map(item => item.gebouw).reverse())];

    return (
        <div className="overview">
            {uniqueGebouw.map(gebouw => (
                <div key={gebouw} className={`gebouw ${gebouw}`}> {/* Added key prop */}
                    {/* Fixed variable naming and filtering */}
                    {data
                        .filter(item => item.gebouw === gebouw)
                        // Get unique racks per gebouw
                        .reduce((racks, item) =>
                                racks.includes(item.rack) ? racks : [...racks, item.rack],
                            [])
                        .map(rack => ( // Correctly named variable
                                <div key={rack} className="rack"> {/* Use rack for key */}
                                    <p>{rack}</p>
                                </div>
                            )
                        )}
                </div>
            ))}
        </div>
    );
}
export default Overview;