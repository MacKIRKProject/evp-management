import styled, { css } from '@xstyled/styled-components'
import { Area } from '@components'

const defaultColumns = {
  _: {
    default: 1,
  },
  sm: {
    1: 1,
    default: 2,
  },
  lg: {
    1: 1,
    2: 2,
    3: 3,
    4: 2,
    default: 3,
  },
}

function getGridArea(size, index, columns, maxColumn, centered) {
  const columnQuantity = columns[size] || columns.default
  const columnsArray = Array.from({ length: columnQuantity }, (_, index) => [
    1 + (maxColumn / columnQuantity) * index,
    1 + (maxColumn / columnQuantity) * (index + 1),
  ])
  const rowIndex = Math.trunc(index / columnQuantity)
  const colIndex = index > columnQuantity - 1 ? index % columnQuantity : index
  const emptySpaceOnRow = Math.max(0, (rowIndex + 1) * columnQuantity - size)
  const offset = (emptySpaceOnRow * (maxColumn / columnQuantity)) / 2
  const appliedOffset = Number.isInteger(offset) && centered ? offset : 0

  return `auto / ${Number(
    columnsArray[colIndex][0] + appliedOffset,
  )} / auto /  ${Number(columnsArray[colIndex][1] + appliedOffset)}`
}

export function DynamicArea({
  index,
  size,
  columns = {},
  centered = true,
  ...props
}) {
  return (
    <AreaStyled
      $centered={centered}
      $columns={{ ...defaultColumns, ...columns }}
      $index={index}
      $size={size}
      {...props}
    />
  )
}

const AreaStyled = styled(props => <Area {...props} v={3} />)`
  ${({ $size, $index, $columns, $centered }) => css`
    grid-area: ${getGridArea($size, $index, $columns._, 2, $centered)};
    @media (min-width: sm) {
      grid-area: ${getGridArea(
        $size,
        $index,
        $columns.sm || $columns._,
        8,
        $centered,
      )};
    }
    @media (min-width: lg) {
      grid-area: ${getGridArea(
        $size,
        $index,
        $columns.lg || $columns.sm || $columns._,
        12,
        $centered,
      )};
    }
  `}
`
