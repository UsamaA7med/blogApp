'use client'
import React from 'react'
import { Pagination, Button } from '@heroui/react'
import { ArrowLeft, ArrowRight } from '@deemlol/next-icons'

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(1)

  return (
    <div className="flex flex-col md:flex-row gap-3 items-center w-full justify-between">
      <Button
        size="sm"
        variant="light"
        startContent={<ArrowLeft size={24} />}
        onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
      >
        Previous
      </Button>
      <Pagination
        color="default"
        page={currentPage}
        total={10}
        onChange={setCurrentPage}
      />
      <Button
        size="sm"
        variant="light"
        endContent={<ArrowRight size={24} />}
        onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
      >
        Next
      </Button>
    </div>
  )
}
