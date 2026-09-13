'use client';

import React, { useState } from 'react';
import { AudienceSegment } from '@/types';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { SolutionsGrid } from '@/components/SolutionsGrid';
import { HealthCheckForm } from '@/components/HealthCheckForm';
import { EmergencyCalculator } from '@/components/EmergencyCalculator';
import { CrisisRapidResponse } from '@/components/CrisisRapidResponse';
import { ComparisonMatrix } from '@/components/ComparisonMatrix';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { LeadCaptureSection } from '@/components/LeadCaptureSection';
import { Footer } from '@/components/Footer';
import { SearchModal } from '@/components/SearchModal';

export default function HomePage() {
  const [currentSegment, setCurrentSegment] = useState<AudienceSegment>('individuals');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedPillarFromSearch, setSelectedPillarFromSearch] = useState<string | null>(null);

  const handleStartAssessment = () => {
    const el = document.getElementById('health-check');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePillars = () => {
    const el = document.getElementById('pillars');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPillar = (pillarId: string) => {
    setSelectedPillarFromSearch(pillarId);
    const el = document.getElementById('pillars');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header & Navigation */}
      <Navbar
        currentSegment={currentSegment}
        onSegmentChange={setCurrentSegment}
        onOpenSearch={() => setIsSearchOpen(true)}
        onStartAssessment={handleStartAssessment}
      />

      <main className="flex-grow">
        {/* 2. Hero Section (Dynamic Storytelling Banner) */}
        <HeroSection
          currentSegment={currentSegment}
          onStartAssessment={handleStartAssessment}
          onExplorePillars={handleExplorePillars}
        />

        {/* 3. Solutions / Core Products Grid (6 Pilar Ketahanan Ekonomi - Philips Style Grid) */}
        <SolutionsGrid
          selectedPillarId={selectedPillarFromSearch}
          onOpenAssessment={handleStartAssessment}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* 4. Integrated Feature 1: Financial Health Check & Early Warning Assessment */}
        <HealthCheckForm />

        {/* 5. Integrated Feature 2: Emergency Fund & Micro-Protection Calculator */}
        <EmergencyCalculator />

        {/* 6. Crisis Rapid Response Center */}
        <CrisisRapidResponse />

        {/* 7. Comparison Matrix: Resilio vs Pinjol Ilegal vs Tabungan Konvensional */}
        <ComparisonMatrix />

        {/* 8. Social Proof & Testimonials */}
        <TestimonialsSection currentSegment={currentSegment} />

        {/* 9. Integrated Feature 3: Lead Capture & Community Newsletter (E-Book Zone) */}
        <LeadCaptureSection />
      </main>

      {/* 10. Footer & Enterprise Compliance Architecture */}
      <Footer />

      {/* Quick Search Palette (Ctrl+K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPillar={handleSelectPillar}
      />
    </div>
  );
}
