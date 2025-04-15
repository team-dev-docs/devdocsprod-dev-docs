import React, { useState, useEffect } from 'react'
import { create, insert, search } from '@orama/orama';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { Card, CardContent } from "../components/ui/card"
import { Search, Loader2, MessageSquare } from 'lucide-react'
import BrowserOnly from '@docusaurus/BrowserOnly';
// import useIsDarkTheme from '@docusaurus/theme-common/internal/hooks/useIsDarkTheme';
import {useColorMode} from '@docusaurus/theme-common';


function OramaSearchModalComponent({ 
    searchIconClass = '', 
    buttonClassName = '', 
    buttonStyle = {} 
}) {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [db, setDb] = useState(null)
    const {colorMode} = useColorMode();
    useEffect(() => {
        async function createAndPopulateDB() {
            let docs = window.oramaDb
            const newDb = await create({
                schema: {
                    title: 'string',
                    content: 'string',
                    url: 'string',
                    slug: 'string',
                }
            })

            for (const doc of docs) {
                await insert(newDb, {
                    title: doc.title,
                    content: doc.content,
                    url: doc.url,
                    slug: doc?.slug
                })
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

    const openAIChat = () => {
        // Close the dialog
        setIsOpen(false);
        // Then trigger the terminal to open
        const event = new CustomEvent('openAIChat');
        window.dispatchEvent(event);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button 
                    variant="outline" 
                    className={`${colorMode === 'dark' ? 'bg-gray-800' : 'bg-white'} ${buttonClassName}`}
                    style={buttonStyle}
                >
                    <Search className={`w-4 h-4 mr-2 ${searchIconClass}`} />
                    Search
                </Button>
            </DialogTrigger>
            <DialogContent className={`sm:max-w-[425px] ${colorMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                <DialogHeader>
                    <DialogTitle className={colorMode === 'dark' ? 'text-white' : 'text-black'}>Search Documentation</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex items-center gap-4">
                        <Input
                            id="search"
                            placeholder="Search documentation..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className={`col-span-3 ${colorMode === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}`} />
                        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    </div>
                    {results.length > 0 && (
                        <div className="overflow-y-auto max-h-60">
                            <Card className={colorMode === 'dark' ? 'bg-gray-700' : 'bg-white'}>
                                <CardContent className="p-4">
                                    <ul className="space-y-2">
                                        {results.map((result) => (
                                            <li key={result.id}>
                                                <a href={result.document.slug || result.document.url} className={`text-lg font-semibold ${colorMode === 'dark' ? 'text-white' : 'text-primary'}`}>
                                                    {result.document.title}
                                                </a>
                                                <p className={`text-sm ${colorMode === 'dark' ? 'text-gray-300' : 'text-muted-foreground'} truncate`}>
                                                    {result.document.content}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                    
                    <div className="border-t border-gray-600 pt-4 mt-2">
                        <Button 
                            variant="outline" 
                            className={`w-full ${colorMode === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'}`}
                            onClick={openAIChat}
                        >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Chat with AI Assistant
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function SearchBar(props) {
  return (
    <BrowserOnly>
      {() => <OramaSearchModalComponent {...props} />}
    </BrowserOnly>
  );
}