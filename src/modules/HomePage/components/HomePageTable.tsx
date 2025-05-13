import { Button } from '@/app/shared';
import { useInView, m } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const columns = ['#', 'Model Name', 'Average', 'ARC', 'HellaSwag', 'MMLU', 'TruthfulQA', 'Winogrande', 'GSM8K', 'Usage'];

const mockedData = [
  ['davidkim205/Rhea-72b-v0.5', '81.22', '79.78', '91.15', '77.95', '74.50', '87.85', '76.12', '1,384,193'],
  ['MTSAIR/MultiVerse_70B', '81.00', '78.67', '89.77', '78.22', '75.18', '87.53', '76.65', '1,319,156'],
  ['SF-Foundation/Ein-72B-v0.11', '80.81', '76.79', '89.02', '77.20', '79.02', '84.06', '78.77', '1,298,529'],
  ['abacusai/Smaug-72B-v0.1', '80.48', '76.02', '89.27', '77.15', '76.67', '85.08', '78.70', '1,255,720'],
  ['ibivibiv/alpaca-dragon-72b-v1', '79.30', '73.89', '88.16', '77.40', '72.69', '86.03', '77.63', '1,239,060'],
  ['mistralai/Mixtral-8x22B-Instruct-v0.1', '79.15', '72.7', '89.08', '77.77', '68.14', '85.16', '82.03', '1,208,482'],
  ['moreh/MoMo-72B-lora-1.8.7-DPO', '78.55', '70.82', '85.96', '77.13', '74.71', '84.06', '78.62', '1,205,577'],
  ['cloudyu/TomGrc_FusionNet_34Bx2_MoE...', '77.91', '74.06', '86.74', '76.65', '72.24', '83.35', '74.45', '1,199,621'],
];

const HomePageTable = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isInView) setStartAnimation(true);
  }, [isInView]);

  return (
    <div ref={ref}>
      <m.div
        initial={{ y: 500, opacity: 0 }}
        animate={startAnimation ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.15, duration: 1.5 }}
        className='text-white font-medium mb-20'
      >
        <div className='flex justify-between flex-col lg:flex-row gap-4 lg:items-center mb-4 lg:mb-8'>
          <h3 className='font-clash-grotesk text-2xl lg:text-[64px] font-medium'>LLM Leaderboard</h3>
          <Button size='lg'>Submit your model</Button>
        </div>
        <p className='text-lg lg:text-2xl mb-8'>
          We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation
          tasks. The higher the score, the better the LLM.
        </p>
        <div className='overflow-scroll max-w-screen -mx-4 px-4 lg:mx-0 lg:px-0'>
          <table className='min-w-full border-separate border-spacing-0'>
            <thead>
              <tr className='text-left text-sm text-gray-400 uppercase'>
                {columns.map((item) => (
                  <th key={item} className='px-4 py-2'>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='text-sm'>
              {mockedData.map((row, i) => (
                <tr key={row[0]} className={i % 2 === 0 ? 'bg-[#C9D9FF14]' : ''}>
                  <td className='px-4 py-6'>{i + 1}</td>
                  <td className='px-4 py-6 whitespace-nowrap'>{row[0]}</td>
                  {row.slice(1).map((value, i) => (
                    <td key={i} className='px-4 py-6 text-right'>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </m.div>
    </div>
  );
};

export default HomePageTable;
