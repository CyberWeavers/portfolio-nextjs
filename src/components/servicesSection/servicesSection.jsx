import React from 'react';
import styles from './servicesSection.module.scss';
import SectionHeader from '../sectionHeader/sectionHeader';
import InfoCard from '../cards/InfoCard';

const ServicesSection = ({ isHidden, headerTitle, headerHighlightedWord, headerID, filteredServices }) => {
    if (isHidden) return null;

    // Group services by category
    const groupedServices = filteredServices.reduce((acc, service) => {
        if (!acc[service.category]) {
            acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
    }, {});

    return (
        <>
            <SectionHeader 
                headerTitle={headerTitle} 
                headerHighlightedWord={headerHighlightedWord} 
                headerID={headerID} 
            />  
            <div className={styles.container}>
                {Object.keys(groupedServices).map(category => (
                    <div key={category} className={styles.categorySection}>
                        <h2 className={styles.categoryHeader}>{category}</h2>
                        <div className={styles.cardContainer}>
                            {groupedServices[category].map(service => (
                                <InfoCard
                                    key={service.title}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    actionText={service.actionText}
                                    actionLink={service.actionLink}
                                    comingSoon={service.comingSoon}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ServicesSection;
