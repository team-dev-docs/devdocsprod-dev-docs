import React, { useEffect, useState } from 'react';
import {useDoc, useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import DocPaginator from '@theme/DocPaginator';
import sidebarsJson from '@site/sidebars.json';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */
export default function DocItemPaginator(): JSX.Element {
  return (
    <BrowserOnly>
      {() => <DocItemPaginatorContent />}
    </BrowserOnly>
  );
}

function DocItemPaginatorContent(): JSX.Element {
  const {metadata} = useDoc();
  const sidebar = useDocsSidebar();
  const [filteredPrevious, setFilteredPrevious] = useState(metadata.previous);
  const [filteredNext, setFilteredNext] = useState(metadata.next);
  const [sidebarItems, setSidebarItems] = useState<any[]>([]);
  
  
  // Get the sidebar configuration
  const sidebars = sidebarsJson as {
    navbar_hide: boolean;
    sidebars: Array<{
      dir: string;
      name: string;
      href?: string;
      exclude_from_all?: boolean;
    }>;
  };

  // Helper function to check if a permalink belongs to an excluded category
  const isFromExcludedCategory = (permalink: string | undefined, excludedDirs: string[]): boolean => {
    if (!permalink) return false;
    return excludedDirs.some(dir => permalink.includes(`/${dir}/`));
  };

  // Helper function to check if a permalink belongs to a specific category
  const isFromCategory = (permalink: string | undefined, category: string): boolean => {
    if (!permalink || category === 'All') return true;
    return permalink.includes(`/${category.toLowerCase()}/`);
  };

  // Recursive function to flatten sidebar items
  const flattenSidebarItems = (items: any[]): any[] => {
    return items.reduce((acc: any[], item) => {
      if (item.type === 'category' && item.items) {
        return [...acc, item, ...flattenSidebarItems(item.items)];
      }
      return [...acc, item];
    }, []);
  };

  // Function to find the correct previous and next navigation items
  const findCorrectNavItems = (flatItems: any[], currentDocId: string, excludedDirs: string[]) => {
    let currentCategory = localStorage.getItem('docSidebarCategory') || 'All';
    
    // Filter out category items and keep only document links
    const docItems = flatItems.filter(item => 
      item.type === 'link' && 
      item.docId && 
      !isFromExcludedCategory(item.href, excludedDirs) &&
      isFromCategory(item.href, currentCategory)
    );
    
    
    
    if (docItems.length === 0) return { prev: undefined, next: undefined };
    
    // Find current document index
    const currentIndex = docItems.findIndex(item => item.docId === currentDocId);
    if (currentIndex === -1) return { prev: undefined, next: undefined };
    
    // Get previous and next items
    const prevItem = currentIndex > 0 ? docItems[currentIndex - 1] : undefined;
    const nextItem = currentIndex < docItems.length - 1 ? docItems[currentIndex + 1] : undefined;
    
    return {
      prev: prevItem ? { 
        title: prevItem.label,
        permalink: prevItem.href 
      } : undefined,
      next: nextItem ? {
        title: nextItem.label,
        permalink: nextItem.href
      } : undefined
    };
  };

  useEffect(() => {
    if (!sidebar || !sidebar.items) return;

    // Get current category from localStorage
    const currentCategory = localStorage.getItem('docSidebarCategory') || 'All';
    

    // Get excluded directories from sidebars.json
    let excludedDirs = []
    let currentIsExcluded;

    if(currentCategory === 'All') {
      excludedDirs = sidebars.sidebars
      .filter(sidebar => sidebar.exclude_from_all === true)
      .map(sidebar => sidebar.dir.toLowerCase());
      currentIsExcluded = isFromExcludedCategory(metadata.permalink, excludedDirs);
    }
    
    
    // Check if current document belongs to the selected category
    const currentInSelectedCategory = isFromCategory(metadata.permalink, currentCategory);
    
    
    // Flatten the sidebar items for easier processing
    const flattenedItems = flattenSidebarItems(sidebar.items);
    setSidebarItems(flattenedItems);
    
    // If the current document is from an excluded category or not in the selected category,
    // use the default navigation
    if (currentIsExcluded || (currentCategory !== 'All' && !currentInSelectedCategory)) {
      setFilteredPrevious(metadata.previous);
      setFilteredNext(metadata.next);
      return;
    }
    
    // Find the correct previous and next navigation items
    const { prev, next } = findCorrectNavItems(flattenedItems, metadata.id, excludedDirs);
    
    
    
    // If metadata has previous/next, check if they should be excluded or are outside of selected category
    const previousIsValid = metadata.previous && 
      !isFromExcludedCategory(metadata.previous.permalink, excludedDirs) && 
      isFromCategory(metadata.previous.permalink, currentCategory);
      
    const nextIsValid = metadata.next && 
      !isFromExcludedCategory(metadata.next.permalink, excludedDirs) && 
      isFromCategory(metadata.next.permalink, currentCategory);
    
    setFilteredPrevious(previousIsValid ? metadata.previous : prev);
    setFilteredNext(nextIsValid ? metadata.next : next);
    
  }, [metadata, sidebar, sidebars]);

  return (
    <>
      <DocPaginator previous={filteredPrevious} next={filteredNext} />
    </>
  );
}
