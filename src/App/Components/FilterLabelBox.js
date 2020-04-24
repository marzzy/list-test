import React from 'react';

function FilterLabelBox({ filterLabel }) {
  return(
    <section className="filterLabelBox">
      <header>
        فیلتر های استفاده شده :
        </header>
      <div>
        {filterLabel.map(filterItem => {
          const [type, value] = filterItem;

          return (<span key={value} className="filterLabel">{type} - {value}</span>)
        })}
        {filterLabel.length === 0 && (
          <p> هنوز از فیلتری استفاده نکرده اید.</p>
        )}
      </div>
    </section>
  );
}

export default FilterLabelBox;
