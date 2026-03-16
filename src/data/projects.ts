export type ProjectLink = { label: string; href: string };

export type DataProject = {
	slug: string;
	title: string;
	year: string;
	summary: string;
	highlights: string[];
	stack: string[];
	links: ProjectLink[];
};

export const projects: DataProject[] = [
	{
		slug: 'modern-data-platform',
		title: 'Modern Data Platform (ELT + DWH + BI)',
		year: '2025',
		summary:
			'Conception d une plateforme ELT modulaire avec modelisation analytique, tests de qualite, et exposition BI.',
		highlights: [
			'Modele en etoile + couches business (marts)',
			'Tests et documentation automatiques (qualite / lineage)',
			'Optimisation couts/perf (partition, incremental, materializations)',
		],
		stack: ['dbt', 'BigQuery', 'Airflow', 'Python', 'Looker Studio'],
		links: [{ label: 'Etude de cas', href: '/projects#modern-data-platform' }],
	},
	{
		slug: 'streaming-pipeline',
		title: 'Streaming Pipeline (events -> analytics)',
		year: '2024',
		summary:
			'Pipeline temps reel pour ingestion d evenements, transformation et monitoring, avec objectifs de latence et fiabilite.',
		highlights: [
			'Schema evolution + validation',
			'Observabilite (logs, metrics, alerting)',
			'Backfills et replays fiables',
		],
		stack: ['Kafka', 'Spark', 'Python', 'Docker', 'Grafana'],
		links: [{ label: 'Details', href: '/projects#streaming-pipeline' }],
	},
	{
		slug: 'analytics-dashboard',
		title: 'KPI Dashboard (produit / revenue)',
		year: '2024',
		summary:
			'Definition des KPIs, couche semantique, et dashboards orientes decisions pour stakeholders non-tech.',
		highlights: [
			'Definitions KPI (single source of truth)',
			'Drill-down (jour -> semaine -> mois)',
			'Guidelines data viz + story telling',
		],
		stack: ['SQL', 'dbt', 'Metabase', 'Git', 'CI'],
		links: [{ label: 'Apercu', href: '/projects#analytics-dashboard' }],
	},
];
