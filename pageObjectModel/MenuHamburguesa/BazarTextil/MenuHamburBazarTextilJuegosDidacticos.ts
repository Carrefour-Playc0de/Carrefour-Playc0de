import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilJuegosDidacticos extends BasePage {

    readonly JUEGOS_DIDACTICOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JUEGOS_DIDACTICOS = this.page.locator('//a [@id="menu-item-category-juegos-didacticos"]')
    }

    async clickBazarTextilJuegosDidacticos(): Promise<void> {
        await this.click(this.JUEGOS_DIDACTICOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilJuegosDidacticos(): Promise<void> {
        await this.clickBazarTextilJuegosDidacticos()
    }
}
