import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import * as S from './styles'
import { SectionModulesProps } from 'types/api'

const SectionModules = ({ title, modules }: SectionModulesProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {modules.map((module, index) => (
        <CardModule key={index} title={module.title} subTitle={module.subtitle}>
          <div dangerouslySetInnerHTML={{ __html: module.description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
