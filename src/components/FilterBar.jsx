import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../store/actions/filter';
import { filterReminders } from '../store/actions/reminders';
import {
  StyledCheckboxGroup,
  StyledInput,
} from './StyledAntComponents';

const FilterRow = styled(Row)`
  justify-content: right;
  align-items: center;
`;

const SearchInput = styled(StyledInput)`
  border-color: ${(props) => props.theme.shinyShamrock};
  color: ${(props) => props.theme.brunswickGreen};

  &:active,
  &:focus,
  &:hover,
  .textarea.ant-input:focus,
  .textarea.ant-input:active {
    border-color: ${(props) => props.theme.shinyShamrock};
  }
`;

const FilterBar = (props) => {
  const { show, searchText } = props.filter;
  const dispatch = useDispatch();

  const options = ['All', 'Active', 'Done'];
  let filter = {
    show: ['Active'],
    searchText,
  };

  const handleShowChange = (e) => {
    const isChecked = e.length > show.length;
    let current = '';
    if (isChecked) {
      current = e.filter((selected) => !show.includes(selected))[0];
    } else {
      current = show.filter((selected) => !e.includes(selected))[0];
    }

    if (current === 'All' && isChecked) {
      filter.show = [...options];
    } else if (current === 'All' && !isChecked) {
      filter.show = [];
    } else if (e.length === 2) {
      if (isChecked) {
        filter.show = [...e, 'All'];
      } else {
        filter.show = [...e.filter((selected) => selected !== 'All')];
      }
    } else {
      filter.show = e;
    }

    dispatch(updateFilter(filter));
    dispatch(filterReminders(filter));
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    dispatch(
      updateFilter({
        show,
        searchText,
      }),
    );
    dispatch(
      filterReminders({
        show,
        searchText,
      }),
    );
  };

  return (
    <FilterRow>
      <Col
        xs={{ span: 6, offset: 1 }}
        md={{ span: 7, offset: 3 }}
        lg={{ span: 8, offset: 5 }}
        xl={{ span: 9, offset: 6 }}
      >
        <SearchInput
          size="large"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </Col>
      <Col
        xs={{ span: 16, offset: 1 }}
        md={{ span: 14, offset: 1 }}
        lg={{ span: 13, offset: 2 }}
        xl={{ span: 12, offset: 1 }}
        flex="auto"
      >
        <StyledCheckboxGroup
          options={options}
          value={show}
          onChange={handleShowChange}
        />
      </Col>
    </FilterRow>
  );
};

export default FilterBar;
