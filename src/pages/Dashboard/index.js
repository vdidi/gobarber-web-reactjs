import React, { useState, useEffect } from 'react';

import { Container, Time } from './styles';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [data, setDate] = useState(new Date());

  // const dateFormated = useMemo

  function handlePrevDay() {
    
  }

  function handleNextDay() {

  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft color="fff" size={36} />
        </button>
        <strong> 12 de julho</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight color="fff" size={36} />
        </button>
      </header>
      <ul>
        {schedule}
      </ul>
    </Container>
  );
}
