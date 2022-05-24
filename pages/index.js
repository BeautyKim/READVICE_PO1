import { ModifyMyInformation, ModifyReadingBooks, ModifySelectionList, Team} from '@/components'
import React, {useEffect} from 'react';

export default function HomePage() {
  
return (
    <>
    <ModifyMyInformation/>
    <ModifyReadingBooks/>
    <ModifySelectionList/>
    <Team/>
    </>
    
)
}