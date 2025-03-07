import React, { useState, useEffect } from 'react'
import { create, insert, search } from '@orama/orama';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Loader2 } from 'lucide-react'

// Fake data for demonstration
const fakeData = [
  { id: 1, title: "Introduction to React", content: "React is a JavaScript library for building user interfaces." },
  { id: 2, title: "State Management in React", content: "Learn about useState and useReducer hooks for managing state in React applications." },
  { id: 3, title: "React Router", content: "React Router is a standard library for routing in React applications." },
  { id: 4, title: "Hooks in React", content: "Hooks are functions that let you use state and other React features without writing a class." },
  { id: 5, title: "Server Components", content: "Server Components let you write UI that can be rendered and optionally cached on the server." }
]

export function OramaSearchModalComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [db, setDb] = useState(null)

  useEffect(() => {
    async function createAndPopulateDB() {
      const newDb = await create({
        schema: {
          id: 'number',
          title: 'string',
          content: 'string',
        }
      })

      for (const item of fakeData) {
        await insert(newDb, item)
      }

      setDb(newDb)
      setIsLoading(false)
    }

    createAndPopulateDB()
  }, [])

  const handleSearch = async () => {
    if (!db || query.trim() === '') {
      setResults([])
      return
    }

    try {
      const { hits } = await search(db, {
        term: query,
        properties: ['title', 'content'],
        limit: 5
      })
      setResults(hits)
    } catch (error) {
      console.error('Search failed:', error)
      setResults([])
    }
  }

  useEffect(() => {
    if (isOpen && !isLoading) {
      handleSearch()
    }
  }, [query, isOpen, isLoading])

  return (
    (<Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search Documentation</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Input
              id="search"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="col-span-3" />
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          </div>
          {results.length > 0 && (
            <Card>
              <CardContent className="p-4">
                <ul className="space-y-2">
                  {results.map((result) => (
                    <li key={result.id}>
                      <h3 className="text-lg font-semibold text-primary">
                        {result.document.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {result.document.content}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>)
  );
}