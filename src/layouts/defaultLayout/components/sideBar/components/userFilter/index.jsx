import { Dropdown, Space, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useState } from 'react'
import './customStyle.css'
import { ClassesContainer } from './style'
import { RegularText } from '../../../../../../styles/typograph'

// const options = [
//   { label: 'TODAS', value: 'TODAS' },
//   { label: '2TDSPI', value: '2TDSPI' },
//   { label: '2TDSPJ', value: '2TDSPJ' },
// ]

export function UserFilter() {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('2TDSPI')

  const items = [
    {
      label: 'TODAS',
      key: '0',
    },
    {
      label: '2TDSPI',
      key: '1',
    },
    {
      label: '2TDSPJ',
      key: '2',
    },
  ]

  return (
    <ClassesContainer>
      <Dropdown
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: ['0'],
        }}
      >
        <Typography.Link>
          <Space>
            {value}
            <DownOutlined />
          </Space>
        </Typography.Link>
      </Dropdown>
      <RegularText color='base-text-lighter' weight='400' fontSize='text-s' className='personalize-text'>
        turma
      </RegularText>
    </ClassesContainer>
  )
}
