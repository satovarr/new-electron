import React, { useState } from "react";
import "./index.css";

const SelectedWindow = ({ onFirstTable, tabs }) => {
  const [aom, setAom] = useState(0);
  const [tir, setTir] = useState(0);

  return (
    <div className="selected_window">
        <div className="selected_tables">
      <div className="uso_table">
        <h1>Activos de uso</h1>
        {onFirstTable.toString()}
        <h1>Arrays</h1>
        {tabs.map((tab) => {
          return (
            <div>
              {tab.index} {tab.selected_ids} y {tab.selected_ids2}
            </div>
          );
        })}
      </div>

      <div className="conx_table">
        <h1>Activos de conexión</h1>
        <table>
            <tr>
                <th>Subestacion E</th>
                <th>Nivel de tension N</th>
                <th>UC N</th>
                <th>Vida util N</th>
                <th>Descripcion N</th>
                <th>Cantidad e</th>
                <th>Capacidad o Area [MW/m2] e</th>
                <th>Costo UC [$ Dic/17 o Dic/08] n</th>
                <th>Costo instalacion [$ Dic/17 o Dic/08] n</th>
                <th>Valor instalado [$ Dic/17 o Dic/08]] n</th>
                <th>Valor instalado [$ Dic/21] n</th>
                <th>AOM + ANE [$ Dic/21] n</th>
                <th>Valor total [$ Dic/21] n</th>
                            
            </tr>
        </table>
      </div>
      </div>
      <div className="export">
        <div className="aomtir">
          <p>
            AOM <input type="text" />{" "}
          </p>
          <p>
            TIR <input type="text" />
          </p>
        </div>

        <button>Export</button>
      </div>
    </div>
  );
};

export default SelectedWindow;
