import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilAutosPistasJuguete extends BasePage {

    readonly AUTOS_PISTAS_JUGUETE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AUTOS_PISTAS_JUGUETE = this.page.locator('//a [@id="menu-item-category-autos-pistas"]')
    }

    async clickBazarTextilAutosPistasJuguete(): Promise<void> {
        await this.click(this.AUTOS_PISTAS_JUGUETE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilAutosPistasJuguete(): Promise<void> {
        await this.clickBazarTextilAutosPistasJuguete()
    }
}
