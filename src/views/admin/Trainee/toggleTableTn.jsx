import React, { useState } from 'react';
import { Table } from 'reactstrap';

function ToggleTableTN(props) {
  const [tableVisible, setTableVisible] = useState(false);
  const [headerColor, setHeaderColor] = useState("#676767");
  function toggleTable() {
    setTableVisible(!tableVisible);
    setHeaderColor(headerColor === "#676767" ? "#fd7e14" : "#676767");
  }

  return (
    <div className="col-lg-12 col-xl-12 col-md-12 col-12">
      <section className="box">
        <header className="panel_header" onClick={toggleTable} style={{cursor:'pointer'}}>
          <h2 className={`title float-left ${tableVisible ? 'active' : ''}`} style={{color:headerColor}}>
            {props.title}
          </h2>
        </header>
        <div className="content-body">
          <div className="row">
            <div className="col-12">
              <Table hover responsive className={tableVisible ? "" : "hide"}>
                {props.children}
              </Table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ToggleTableTN;
