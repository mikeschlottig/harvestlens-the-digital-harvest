import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { ExternalLink } from 'lucide-react';
type RankItem = {
  rank: number;
  name: string;
  lang: string;
  lic: string;
  url: string;
};
type RankingTableProps = {
  data?: RankItem[];
  isLoading: boolean;
};
export const RankingTable = ({ data, isLoading }: RankingTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lang.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);
  const renderSkeleton = () => (
    Array.from({ length: 10 }).map((_, i) => (
      <TableRow key={`skeleton-${i}`}>
        <TableCell><Skeleton className="h-5 w-10" /></TableCell>
        <TableCell><Skeleton className="h-5 w-40" /></TableCell>
        <TableCell><Skeleton className="h-5 w-24" /></TableCell>
        <TableCell><Skeleton className="h-5 w-16" /></TableCell>
        <TableCell><Skeleton className="h-5 w-12" /></TableCell>
      </TableRow>
    ))
  );
  return (
    <div>
      <div className="mb-4">
        <Input
          placeholder="Search by name or language..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-xl shadow border border-border overflow-hidden">
        <div className="overflow-x-auto max-h-[600px] custom-scroll relative">
          <Table className="min-w-full text-left text-sm whitespace-nowrap">
            <TableHeader className="uppercase tracking-wider border-b-2 border-border bg-muted/50 sticky top-0 z-10">
              <TableRow>
                <TableHead className="px-6 py-4 font-semibold text-muted-foreground">Rank</TableHead>
                <TableHead className="px-6 py-4 font-semibold text-muted-foreground">Name</TableHead>
                <TableHead className="px-6 py-4 font-semibold text-muted-foreground">Language</TableHead>
                <TableHead className="px-6 py-4 font-semibold text-muted-foreground">License</TableHead>
                <TableHead className="px-6 py-4 font-semibold text-muted-foreground">GitHub</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-border">
              {isLoading ? renderSkeleton() : filteredData.map((item) => (
                <TableRow key={item.rank} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="px-6 py-4 font-medium text-foreground">#{item.rank}</TableCell>
                  <TableCell className="px-6 py-4 font-bold text-neon-primary">{item.name}</TableCell>
                  <TableCell className="px-6 py-4 text-muted-foreground">{item.lang}</TableCell>
                  <TableCell className="px-6 py-4">
                    <span className="text-muted-foreground text-xs uppercase bg-muted px-2 py-1 rounded">{item.lic}</span>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <a href={`https://${item.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline inline-flex items-center gap-1">
                      Link <ExternalLink className="size-3" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};