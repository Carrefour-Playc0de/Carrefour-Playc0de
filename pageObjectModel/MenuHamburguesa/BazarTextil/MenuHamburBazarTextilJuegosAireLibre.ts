import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilJuegosAireLibre extends BasePage {

    readonly JUEGOS_AIRE_LIBRE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.JUEGOS_AIRE_LIBRE = this.page.getByRole('link', { name: 'Juegos de aire libre' })
        this.JUEGOS_AIRE_LIBRE = this.page.locator('//div[contains(text(),\'Juegos de aire libre\')]')
    }

    async clickBazarTextilJuegosAireLibre(): Promise<void> {
        await this.click(this.JUEGOS_AIRE_LIBRE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilJuegosAireLibre(): Promise<void> {
        await this.clickBazarTextilJuegosAireLibre()
    }
}
