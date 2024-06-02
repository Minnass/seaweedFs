import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import FilterChip from '@/components/core/filter-chip/FilterChip';
import { typeFilterItems } from '@/utils/constants/type-filter.constant';
import { modifiedFilterItems } from '@/utils/constants/modified-filter.constant';

type MemoryFilterProps = {
  typeFilter: string;
  modifiedFilter: string;
  setTypeFilter: (value: string) => void;
  setModifiedFilter: (value: string) => void;
};

const MemoryFilter: React.FC<MemoryFilterProps> = ({ setTypeFilter, setModifiedFilter, typeFilter, modifiedFilter }) => {
  return (
    <div className='flex gap-2'>
      <FilterChip
        name='Type'
        options={typeFilterItems.map((item) => ({ label: item.label, icon: <Icon icon={item.icon} /> }))}
        action={(value) => setTypeFilter(value)}
        value={typeFilterItems.find((item) => item.label === typeFilter)?.label || ''}
      />
      <FilterChip
        name='Modified'
        options={modifiedFilterItems}
        action={(value) => setModifiedFilter(value)}
        value={modifiedFilterItems.find((item) => item?.value === modifiedFilter)?.label || ''}
      />
    </div>
  );
};

export default MemoryFilter;
