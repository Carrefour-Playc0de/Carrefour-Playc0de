import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilJuegosVerano extends BasePage {

    readonly JUEGOS_VERANO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.JUEGOS_VERANO = this.page.getByRole('link', { name: 'Juegos de verano' })
        this.JUEGOS_VERANO = this.page.locator('//div[contains(text(),\'Juegos de verano\')]')
    }

    async clickBazarTextilJuegosVerano(): Promise<void> {
        await this.click(this.JUEGOS_VERANO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilJuegosVerano(): Promise<void> {
        await this.clickBazarTextilJuegosVerano()
    }
}
