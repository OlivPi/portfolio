import React, {useContext, useState} from 'react';
import { Switch } from '@headlessui/react'
import {ThemeContext} from '../ThemeContext';

export default function MyToggle() {

  const [enabled, setEnabled] = useState(false);

  const {theme, setTheme} = useContext(ThemeContext);


  console.log(theme);



      return (
        <Switch
          checked={enabled}
          onChange={() => setEnabled(setTheme)}
          className={`${
            enabled ? 'bg-white' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11 my-3`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-black rounded-full`}
          />
        </Switch>
      )

}
