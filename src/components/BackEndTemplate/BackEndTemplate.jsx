import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodosThunk } from '../../redux/backEndSlice/backEndSlice';
import { backState } from '../../redux/backEndSlice/backSelectors';

const BackEndTemplate = () => {
  const dispatch = useDispatch()
  const  backEnd  = useSelector(backState)
  console.log('backEnd :>> ', backEnd);

  useEffect(() => {
    dispatch(getTodosThunk())
  }, [dispatch]);

  return (
    <div>BackEndTemplate</div>
  )
}

export default BackEndTemplate