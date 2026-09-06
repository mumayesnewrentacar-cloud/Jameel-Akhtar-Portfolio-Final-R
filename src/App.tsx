import React, { useState } from 'react';
import { DigimaxNavbar } from './components/DigimaxNavbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AccountingKnowledgeSection } from './components/AccountingKnowledgeSection';
import { FinancialModelingShowcase } from './components/FinancialModelingShowcase';
import { EducationCertifications } from './components/EducationCertifications';
import { SkillsSection } from './components/SkillsSection';
import { ValuesSection } from './components/ValuesSection';
import { DigimaxLogoCloud } from './components/DigimaxLogoCloud';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DataAnalyticsSection } from './components/DataAnalyticsSection';
import { ToolsSection } from './components/ToolsSection';
import { DigimaxFAQ } from './components/DigimaxFAQ';
import { ContactSection } from './components/ContactSection';
import { DigimaxFooter } from './components/DigimaxFooter';
import { DiscoverMoreModal } from './components/DiscoverMoreModal';
import { ResumeDownloadModal } from './components/ResumeDownloadModal';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  const [isDiscoverModalOpen, setIsDiscoverModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleOpenGetStarted = () => {
    setIsDiscoverModalOpen(true);
  };

  const handleOpenDiscoverMore = () => {
    setIsDiscoverModalOpen(true);
  };

  const handleOpenCVModal = () => {
    setIsCVModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#090614] text-slate-100 font-sans selection:bg-pink-500/30 selection:text-pink-200 antialiased overflow-x-hidden">
      
      {/* Navigation Bar with Jameel Akhtar Identity and DigiMax Style */}
      <DigimaxNavbar 
        onOpenCVModal={handleOpenCVModal}
        onOpenGetStarted={handleOpenGetStarted} 
      />

      {/* Main Content Flow Integrating Jameel Akhtar's Portfolio & DigiMax Framing */}
      <main className="relative flex flex-col z-10">
        
        {/* 1. Hero Section & Financial Workstation Terminal */}
        <Hero onOpenCVModal={handleOpenCVModal} />

        {/* 2. Executive About & Professional Arc */}
        <AboutSection onOpenCVModal={handleOpenCVModal} />

        {/* 3. Core Discipline: General Ledger, IFRS & End-to-End Accounting Cycle */}
        <AccountingKnowledgeSection />

        {/* 4. Financial Modeling Architecture (11-Step Valuation Cascade) */}
        <FinancialModelingShowcase />

        {/* 5. Verified Credentials, Academic Education & Certifications (From Candidate CV Data) */}
        <EducationCertifications onOpenCVModal={handleOpenCVModal} />

        {/* 6. Comprehensive Categorized Skills & Technical Competencies Taxonomy */}
        <SkillsSection />

        {/* 7. Core Professional Values & Accounting Rigor */}
        <ValuesSection />

        {/* 8. Framed Logo Cloud: ERP & Enterprise Systems Grid matching attached design */}
        <DigimaxLogoCloud />

        {/* 9. Career Experience Timeline (9+ Years Progression) */}
        <ExperienceSection />

        {/* 10. Featured Production Financial Projects & Models */}
        <ProjectsSection />

        {/* 11. Data Analytics, Power BI & Power Query ETL Automation */}
        <DataAnalyticsSection />

        {/* 12. Financial Tech Stack & ERP Systems */}
        <ToolsSection />

        {/* 13. Common Questions & Most Popular Questions Accordion with Discover More */}
        <DigimaxFAQ onOpenDiscoverMore={handleOpenDiscoverMore} />

        {/* 14. Contact & Advisory Inquiry Section (Dubai, UAE) */}
        <ContactSection onOpenCVModal={handleOpenCVModal} />

      </main>

      {/* Footer with Services, Support, Company, and Copyright */}
      <DigimaxFooter />

      {/* Interactive Discover More Consultation Modal */}
      <DiscoverMoreModal
        isOpen={isDiscoverModalOpen}
        onClose={() => setIsDiscoverModalOpen(false)}
      />

      {/* ATS-Compliant Resume / CV Viewer & Download Modal */}
      <ResumeDownloadModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* Back to Top Floating Action Button */}
      <ScrollToTopButton threshold={300} />
      
    </div>
  );
}
