import React, { Component, useEffect, useState } from 'react';

import { AirlineService } from './services/AirlineService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';

import 'primereact/resources/themes/nova/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const ListAirlines = () => {
    const [state, setState] = useState({airlines: []});

    useEffect(() => {
        let airlineService = new AirlineService();
        airlineService.getAll().then(data => setState({ airlines: data }))
    }, [state])

    return (
        <Panel header="List of Airlines" style={{ width: '70vw', margin: '0 auto', marginTop: '15%' }} toggleable={true}>
            <DataTable value={state.airlines} style={{ width: '80%', margin: '0 auto' }}>
                <Column field="id" header="Id"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="code" header="Code"></Column>
                <Column field="origin" header="Origin"></Column>
            </DataTable>
        </Panel>
    );
}

export default ListAirlines;
