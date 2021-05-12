import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


const Sample = () => {
    const header = (
        <img alt="Card" src="showcase/demo/images/usercard.png" onError={( e ) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-ml-2" />
        </span>
    );

    return (
        <div className="p-grid">

            <div className="p-col">
                <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                    <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
            </div>
            <div className="p-col">
                <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                    <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
            </div>
            <div className="p-col">
                <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                    <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
            </div>
            <div className="p-col">
                <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}>
                    <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
            </div>

        </div>
    );
};

export default Sample;
