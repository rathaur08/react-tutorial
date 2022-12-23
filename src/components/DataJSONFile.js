import React from 'react';
import Records from './records.json';

const DataJSONFile = () => {
    return (
        <div>
            {
                Records && Records.map(record => {
                    return (
                        <div className='box' key={record.id}>
                            <br /><br /><br />
                            <strong>{record.title}</strong><br />
                            {record.content}<br /><br />

                            {record.tech && record.tech.map(data => {
                                return (
                                    <div key={record.id}>
                                        --{data.name}--
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DataJSONFile